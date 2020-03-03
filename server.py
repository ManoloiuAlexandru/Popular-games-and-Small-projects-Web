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
users_playing = list()
user_picked = list()
picking_player = ''
picked_player = ''


@app.route('/')
def index():
    print(users_playing)
    return render_template('index.html')


@app.route('/play')
def play():
    global name
    global users_playing
    global user_picked
    name = request.args.get('username')
    email = request.args.get('email')

    if name is None:
        name = ''

    if email is None:
        emial = name

    users_playing.append("/play?username=" + name)
    print(picking_player)
    print(picked_player)
    return render_template('play.html')


@app.route('/picked', methods=['GET'])
def picked():
    global picked_player
    global picking_player
    picking_player = json.dumps(name)
    player_picked = request.args.get('fname')
    for i in users_playing:
        if player_picked in i:
            picked_player = i
            return render_template('arena.html')
    return json.dumps("That player is not online")


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


global player1
global player2

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
name = ''
