import shlex
import subprocess
import json

def call_curl(curl):
    args = shlex.split(curl)
    process = subprocess.Popen(args, shell=False, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    return json.loads(stdout.decode('utf-8'))


if __name__ == '__main__':
    curl = '''curl -X GET -H 'Authorization: Bearer ec8ntzrkg27itb6zf7c2szrdwb' 'https://api.smartsheet.com/2.0/sheets/6377667244124036' '''
    output = call_curl(curl)
    print(output)
    with open('resources.json', 'w') as f:
        json.dump(output,f, indent=4)
