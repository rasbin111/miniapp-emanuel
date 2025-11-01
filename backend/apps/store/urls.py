from django.urls import path

from .views import NavigationContentView, LoginContentView, TermsView

urlpatterns = [
    path("navigation-contents/", NavigationContentView.as_view()),
    path("login-contents/", LoginContentView.as_view()),
    path("terms/", TermsView.as_view()),
]
