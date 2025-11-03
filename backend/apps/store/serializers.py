from rest_framework.serializers import ModelSerializer

from .models import Product


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "in_stock",
            "in_price",
            "price",
            "description",
            "unit",
            "article_num",
        ]
