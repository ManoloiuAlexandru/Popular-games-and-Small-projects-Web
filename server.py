from flask import Flask, render_template, request, jsonify, make_response, json
from pusher import pusher

app = Flask(__name__)

pusher = pusher_client = pusher.Pusher(
    app_id='954763',
    key='825853d3b5713e7f4ec2',
    secret='74f907a3933ec10cdbef',
    cluster='eu',
    ssl=True
)

name = ''


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/play')
def play():
    global name
    name = request.args.get('username')
    return render_template('play.html')


@app.route("/pusher/auth", methods=['POST'])
def pusher_authentication():
    auth = pusher.authenticate(
        channel=request.form['channel_name'],
        socket_id=request.form['socket_id'],
        custom_data={
            u'user_id': name,
            u'user_info': {
                u'role': u'player'
            }
        }
    )
    return json.dumps(auth)


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)

name = ''
