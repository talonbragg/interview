var socket = io();

function userJoin() {
	socket.emit('user join', function() {
		var join = document.getElementById('join');
		join.innerHTML = join.innerHTML + '\n A User Joined';
	});
}