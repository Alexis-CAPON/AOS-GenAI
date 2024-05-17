
# =======================================TEMPLATE=========================================
json_template = """
{
  "slides": []
}

"""

templates = """

| id_slide | Description                                                                          | Json slide                                                                                                                                                                                                                         |
|----------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0        | Première page de powerpoint pour les présentations                                   | {"id_slide_type" : "0","content":[{"Title":""},{"Sub_title":""},]}                                                                                                                                                                 |
| 1        | Slide contenant 1 bullet point                                           | {"id_slide_type" : "1","content":[{"Title":""},{"Sub_title":""},{"bulletPoint1":""},]}                                                                                                                                             |
| 2        | Slide contenant 2 bullet points                                                      | {"id_slide_type" : "2","content":[{"Title":""},{"Sub_title":""},{"bulletPoint1":""},{"bulletPoint2":""},]}                                                                                                                         |
| 3        | Slide contenant 3 bullet points                                                      | {"id_slide_type" : "3","content":[{"Title":""},{"Sub_title":""},{"bulletPoint1":""},{"bulletPoint2":""},{"bulletPoint3},]}                                                                                                         |
| 4        | Slide contenant 4 bullet points                                                      | {"id_slide_type" : "4","content":[{"Title":""},{"Sub_title":""},{"bulletPoint1":""},{"bulletPoint2":""},{"bulletPoint3":""},{"bulletPoint4":""},]}                                                                                 |
| 5        | Slide contenant 5 bullet points ou plus                                              | {"id_slide_type" : "5","content":[{"Title":""},{"Sub_title":""},{"bulletPoint1":""},{"bulletPoint2":""},{"bulletPoint3":""},{"bulletPoint4":""},{"bulletPoint5":""},{"bulletPoint6":""},{"bulletPoint7":""},{"bulletPoint8":""},]} |
| 6        | Slide conclusion, reprend les iformation les plus importantes des slides précédentes | {"id_slide_type" : "6","content":[{"Title":""},{"Sub_title":""},{"bulletPoint1":""},{"bulletPoint2":""},{"bulletPoint3":""},{"bulletPoint4":""},]}                                                                                 |

"""