

import subprocess
def get_data():
    CurlUrl="curl -X GET -H 'Authorization: Bearer ec8ntzrkg27itb6zf7c2szrdwb' 'https://api.smartsheet.com/2.0/sheets/6377667244124036'"

    output = subprocess.getstatusoutput(CurlUrl)
    print(output)

get_data()
