from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import NavigationContentView, LoginContentView, TermsView, ProductViewset

router = DefaultRouter()

router.register("products", ProductViewset, basename="products")

urlpatterns = [
    path("", include(router.urls)),
    path("navigation-contents/", NavigationContentView.as_view()),
    path("login-contents/", LoginContentView.as_view()),
    path("terms/", TermsView.as_view()),
]
