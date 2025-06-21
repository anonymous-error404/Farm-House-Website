from datetime import datetime
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.views import APIView
from FarmHouse_Website.serializer import *
from django.core.cache import cache

#gotta create a new url mapping for otp verification and call the bookingviewset.create method after otp is verified

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Bookings.objects.all()
    serializer_class = BookingsSerializer

    def create(self, request):

        serializer = self.get_serializer(data=request.data)  # raw data

        if serializer.is_valid(raise_exception=True):  # check if data is valid
            check_in_date = serializer.validated_data['checkInDate']
            check_out_date = serializer.validated_data['checkOutDate']
            validity_status, message = utils.validate_booking_dates(check_in_date, check_out_date)
            print(message)

            if validity_status:
                conflict_status, conflicts = utils.check_booking_availability(check_in_date, check_out_date)
                if conflict_status:
                    return Response(data=conflicts, status=status.HTTP_409_CONFLICT)
                else:
                    if 'IDimage' not in serializer.validated_data:
                        return Response({'message': 'IDimage is required'}, status=status.HTTP_206_PARTIAL_CONTENT)
                    else :
                        serializer.validated_data['bookingDate'] = datetime.today()
                        serializer.save()
                        return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)
        else:
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class MenuViewSet(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class ReviewsViewSet(viewsets.ModelViewSet):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid(raise_exception=True):

            if not Bookings.objects.filter(bookingId=Bookings.objects.get(guestPhone=request.data['guestPhone']).bookingId).exists():
                return Response(status=status.HTTP_406_NOT_ACCEPTABLE)

            try:
                serializer.validated_data['bookingId'] = Bookings.objects.get(guestPhone=request.data['guestPhone']).bookingId
                serializer.validated_data['reviewDate'] = datetime.today()
                saved_review = serializer.save()

                if utils.setMedia(media_list=request.FILES.getlist('media_list'),
                                review=Reviews.objects.get(reviewId=saved_review.reviewId)):
                    return Response(status=status.HTTP_200_OK)
                else:
                    return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            except Exception as e:
                print(e)

    def list(self, request):
        queryset = self.get_queryset()
        serializer = ReviewsSerializer(queryset, many=True)
        reviews = serializer.data

        for review in reviews:
            review['media_list'] = utils.getMedia(review['reviewId'])

        return Response(data=reviews, status=status.HTTP_200_OK)

    def retrieve(self, request, *args, **kwargs):
        queryset = self.get_queryset().get(reviewId=kwargs.get('pk'))
        serializer = ReviewsSerializer(queryset, many=False)
        review = serializer.data
        review['media_list'] = utils.getMedia(review['reviewId'])
        return Response(data=review, status=status.HTTP_200_OK)


class Authorization(APIView):
    
    def get(self, request):
        
        if request.data['guestEmail'] :
            receiver = request.data['guestEmail']
            
            if Bookings.objects.filter(guestEmail=receiver).exists() :
                return Response(status=status.HTTP_100_CONTINUE)
            elif utils.sendOtpVerificationMail(receiver=receiver):
                request.session['customerEmail']=receiver
                return Response(status=status.HTTP_200_OK)
            else :
                return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
        
    def post(self,request):
        
        if request.session['customerEmail'] and request.data['otp']:
            customerEmail = request.session['customerEmail']
            otp = request.data['otp']
            
            if cache.get(customerEmail) == otp :
                cache.delete(customerEmail)
                return Response(status=status.HTTP_200_OK)
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        return Response(status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)