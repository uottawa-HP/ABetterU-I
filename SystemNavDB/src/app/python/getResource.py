import subprocess


def get_data():
    
    status, output = subprocess.getstatusoutput(CurlUrl)
    print output

get_data()
