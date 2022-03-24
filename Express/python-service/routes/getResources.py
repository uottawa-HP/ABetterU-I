import shlex
import subprocess
import json

#copying curl
def call_curl(curl):
    args = shlex.split(curl)
    process = subprocess.Popen(args, shell=False, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    return json.loads(stdout.decode('utf-8'))


if __name__ == '__main__':
    curl = ''' '''
    output = call_curl(curl)
    print(output)
    with open('resources.json', 'w') as f:
        json.dump(output,f, indent=4)
