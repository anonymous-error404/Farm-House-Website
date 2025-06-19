from FarmHouse_Website import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'bookings', views.BookingViewSet)
router.register(r'menu', views.MenuViewSet)
router.register(r'reviews', views.ReviewsViewSet)
urlpatterns = [
    path('NirmalFarms/', views.Home.as_view(), name='home'),
    path('NirmalFarms/api/', include(router.urls)),
]
