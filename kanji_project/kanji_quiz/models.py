from django.db import models

class Kanji(models.Model):
    idkanji_dict = models.IntegerField(primary_key=True)
    kanji = models.CharField(max_length=50, blank=False)
    strokes = models.IntegerField()
    reading = models.CharField(max_length=200, blank=True)
    meaning = models.CharField(max_length=200, blank=True)
    pronounciation = models.CharField(max_length=200, blank=True)
    grade = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'kanji_dict'

    def __str__(self):
        return "{}: {} grade:{}".format(self.kanji, self.meaning, self.grade)