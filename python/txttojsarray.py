f = open("../assets/problems.txt", "r")
o = open("../js/dataArray.js", "a")
lines = f.read().split('~~~')
o.write("var problems = [")
for x in lines:
    o.write("\"")
    o.write(lines[x])
    o.write("\"")
    o.write(", ")
o.write("];")
o.close();
f.close();
