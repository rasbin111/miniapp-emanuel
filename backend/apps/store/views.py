from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.utils.text import slugify
from .models import Content, Terms


class NavigationContentView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        lang = request.GET.get("lang").strip()

        response_dict = {}

        contents = Content.objects.filter(content_type__name="menu_item")

        if lang == "eng":
            for content in contents:
                response_dict[slugify(content.eng).replace("-", "_")] = content.eng
        else:
            for content in contents:
                response_dict[slugify(content.eng).replace("-", "_")] = content.swe
        return Response(response_dict, status=status.HTTP_200_OK)


class LoginContentView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        lang = request.GET.get("lang").strip()

        response_dict = {}
        contents = Content.objects.filter(content_type__name="login_form")

        if lang == "eng":
            for content in contents:
                response_dict[content.content_name] = content.eng
        else:
            for content in contents:
                response_dict[content.content_name] = content.swe
        return Response(response_dict, status=status.HTTP_200_OK)


class TermsView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        lang = request.GET.get("lang").strip()

        response_dict = {}
        contents = Content.objects.filter(content_type__name="terms")
        terms = Terms.objects.first()

        if lang == "eng":
            for content in contents:
                response_dict[content.content_name] = content.eng
                response_dict["terms"] = terms.eng
        else:
            for content in contents:
                response_dict[content.content_name] = content.swe
                response_dict["terms"] = terms.swe
        return Response(response_dict, status=status.HTTP_200_OK)
