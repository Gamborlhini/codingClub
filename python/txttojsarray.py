f = open("../assets/problems.txt", "r")
o = open("../js/dataArray.js", "a")
o.write("var problems = [")
for x in f:
    o.write("\"")
    o.write(x)
    o.write("\"")
    o.write(", ")
o.write("];")
o.close();
f.close();
