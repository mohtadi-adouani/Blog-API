from django.urls import path
from .views import UserCreateAPIView, UserListAPIView, UserDetailAPIView, login

app_name = "accounts"

urlpatterns = [
    path("", UserListAPIView.as_view(), name="user_detail"),
    path("register/", UserCreateAPIView.as_view(), name="user_create"),
    path("login/", login, name="user_login"),
    path("<int:id>/", UserDetailAPIView.as_view(), name="user_detail"),
]