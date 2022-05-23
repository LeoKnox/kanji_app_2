from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from .serializers import KanjiListSerializer, KanjiGradeSerializer
from .models import Kanji

@csrf_exempt
def KanjiGradeAPIView(request):
    serializer = Kanji.objects.values('grade').distinct()
    serializer_class = KanjiGradeSerializer(serializer, many=True)
    return JsonResponse(serializer_class.data, safe=False)

class KanjiListAPIView(generics.ListAPIView):
    serializer_class = KanjiListSerializer
    def get_queryset(self):
        filter_search = "SELECT * FROM kanji_app_db.kanji_dict WHERE "
        grade = self.kwargs['grade']
        if grade.isnumeric():
            for g in grade:
                filter_search += "grade={} OR ".format(g)
            queryset = Kanji.objects.raw(filter_search[:-3])
            return queryset
        else:
            return redirect("/home")

class KanjiGradeGetAPIView(generics.CreateAPIView):
    queryset = Kanji.objects.all()