from rest_framework import serializers
from .models import Kanji

class KanjiListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kanji 
        fields = [
            'idkanji_dict',
            'kanji',
            'strokes',
            'meaning',
            'reading',
            'pronounciation',
            'grade',
        ]

class KanjiGradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Kanji 
        fields = [
            'grade',
        ]