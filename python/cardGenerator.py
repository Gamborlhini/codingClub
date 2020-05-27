import sys

titleinput = raw_input("Enter the title of the card: ")
descriptioninput = raw_input("Enter the description for this card: ")
iframeinput = raw_input("Enter the iframe url you wish to use: ")

def generateCard(title, description, link):
    print("<div class=\"col-md\">")
    print("<div class=\"card\">")
    print("<div class=\"card-head\">")
    sys.stdout.write("<h5 class=\"text-center\">")
    sys.stdout.write(title)
    sys.stdout.write("</h5>\n")
    sys.stdout.write("<p>")
    sys.stdout.write(description)
    sys.stdout.write("</p>\n")
    print("</div>")
    print("<div class=\"card-body\">")
    sys.stdout.write("<iframe src=\"")
    sys.stdout.write(link)
    sys.stdout.write("\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n")
    print("</div>")
    print("</div>")
    print("</div>")
    pass

generateCard(titleinput, descriptioninput, iframeinput)
