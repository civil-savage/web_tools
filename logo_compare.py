#!/usr/local/bin/python3

import os
import sys
from jinja2 import Template


template = Template("""
<html>
  <style>
    table.tbrd {
    border-collapse: collapse;
    border-spacing: 0px;
    }
    table.tbrd td {
    border: 1px #999999 solid;
    padding: 4px;
    color: #000000;
    }
  </style>
  <body>
    <table class="tbrd">
      <tr>
	<td align=center>
	  <b>OLD</b>
	</td>
        <td align=center>
         <b>NEW</b>
        </td>
      </tr>
      {% for old, new in logos.iteritems() %}
      <tr>
	<td align=center>
	  <img src="{{ old }}" alt="{{ old }}"></img>
	</td>
	<td align=center>
	  <img src="{{ new }}" alt="{{ new }}"></img>
	</td>
      </tr>
      {% endfor %}
    </table>
  </body>
</html>
""")



new_logos = os.listdir("server location of new logos")
old_logos = os.listdir("server location of old logos", sys.argv[1]))
build_old_path = "src dest path for old"
build_new_path = "src dest path for new"
old_logo_src = []
new_logo_src = []

for logo in sorted(new_logos):
    new_logo_src.append(os.path.join(build_new_path,logo))
    if logo not in old_logos: 
        alt_text = "First time showing {}".format(str(logo))
        old_logo_src.append(alt_text)
    else:
        old_logo_src.append(os.path.join(build_old_path,logo))
logos = dict(zip(old_logo_src,new_logo_src))

html_file = os.path.join(os.path.split("/m/survey/support/mri/acc/new_logos")[0],'logo_test.html')
with open(html_file,'w') as wfile:
      wfile.write(template.render(logos=logos))
