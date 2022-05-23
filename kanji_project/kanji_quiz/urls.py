from django.urls import path
from . import views

urlpatterns = [
    path('', views.KanjiListAPIView.as_view(), name='kanji_list'),
    path('quiz/<grade>', views.KanjiListAPIView.as_view(), name='kanji_list'),
    path('g/',views.KanjiGradeAPIView, name='kanji_grades'),
]