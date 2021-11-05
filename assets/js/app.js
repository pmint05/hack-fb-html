// app.js lúc nào cũng là sự mashup của js và jquery :v
// Code hơi gà, thông cảm nka 😿
// by fb.com/pmint05

const hackBtn = document.querySelector("#hack-btn");
const victimLink = document.querySelector("#victimLink");
const victimInp = document.querySelector(".input");
const hackingForm = document.querySelector("#hackingForm");
const errLog = document.querySelector(".err-log");
const hackingLog = document.querySelector(".hacking-log");
const startOverBtn = document.querySelector("#start-over");
const test = hackingLog.querySelector("#logs");
const trollVideo = document.querySelector("#troll-video");
const cayBtn = document.querySelector("#cay-btn");
const toggleDisclaimer = document.querySelector("#toggle-disclaimer");

document.addEventListener("click", function (e) {
	if (e.target.id == "here-btn") {
		HaoHan();
	}
});

let memeList = [
	"ccldcb.mp4",
	"egxxo.mp4",
	"faifai.mp4",
	"kha_banh.mp4",
	"lau_dai_tinh_ai.mp4",
	"rick_roll_1.mp4",
	"rick_roll_2.mp4",
	"super_idol_2.mp4",
	"super_idol_3.mp4",
	"super_idol_4.mp4",
	"super_idol_5.mp4",
	"pew1.mp4",
	"pew2.mp4",
	"pew3.mp4",
	"pew4.mp4",
	"pew5.mp4",
	"surprise.mp4",
];

let isClicked;
let typingTimeout;
let typeTimeout;

startOverBtn.addEventListener("click", () => {
	startOver();
});
function loading() {
	var id = Math.floor(Math.random() * memeList.length);
	var meme = "assets/videos/" + memeList[id];
	console.log(meme);
	trollVideo.src = meme;
	var load = setInterval(() => {
		var c = parseInt($(".counter").text());
		$(".counter").text((++c).toString());
		$(".inner").css("width", 2.4 * c + "px");
		if (c == 35) {
			$(".loading-log").text("Connecting to FB database ...");
		}
		if (c == 80) {
			$(".loading-log").text("Initializing environment ...");
		}
		if (c == 100) {
			$(".counter").addClass("hide");
			$(".counter").addClass("glitch");
			$(".loading-log").addClass("glitch");
			if (screen.width < 500 || window.innerWidth < 500) {
				$(".hao-han-title").text("Chúk pạn may mắn lần sau!");
				$(".counter").css("left", "-20px");
			} else {
				$(".counter").css("left", "-40px");
			}
			$(".loader").addClass("hide");
			$(".container").addClass("show");
			$(".bg").addClass("show");
			$(".loading-log").text("Done!");
			clearInterval(load);
		}
	}, 70);
}

$(document).ready(function () {
	$(".glitch_hover").each(function (i) {
		var spanCont = $(this).html();
		$(this)
			.prepend("<span>" + spanCont + "</span>")
			.append("<span>" + spanCont + "</span>");
	});
});

hackingForm.addEventListener("submit", function (e) {
	e.preventDefault();
});

hackBtn.addEventListener("click", () => {
	if (!isClicked) {
		hackBtn.classList.add("active");
		setTimeout(() => {
			hackBtn.classList.remove("active");
		}, 1500);
		if (errLog.classList.contains("show")) {
			errLog.classList.remove("show");
		}
		startHacking();
	}
});
toggleDisclaimer.addEventListener("click", () => {
	$(".disclaimer-wrapper").toggleClass("show");
	if ($(".disclaimer-wrapper").hasClass("show")) {
		toggleDisclaimer.innerHTML = "<i class='fad fa-times'></i>";
	} else {
		toggleDisclaimer.innerHTML = "<i class='fad fa-info-circle'></i>";
	}
});
cayBtn.addEventListener("click", () => {
	var id = Math.floor(Math.random() * memeList.length);
	var meme = "assets/videos/" + memeList[id];
	console.log(meme);
	trollVideo.src = meme;
	startOver();
	hackingForm.classList.remove("hacking");
	hackingLog.classList.remove("hacking");
	$(".troll-wrapper").removeClass("show");
	$(".hao-han-wrapper").removeClass("show");
	const jumpBtn = document.getElementById("show-pass-prank");
	jumpBtn.style.position = "relative";
	jumpBtn.style.top = "0";
	jumpBtn.style.left = "0";
});
function startHacking() {
	let victim = victimLink.value.trim();
	if (victim == "") {
		showError("Link victim không được để trống!");
	} else {
		victimInp.classList.add("active");
		victimLink.disabled = true;
		hackBtn.classList.add("hold");
		$(".checking-status").addClass("show");
		if (checkVictim(victim)) {
			setTimeout(() => {
				$(".checking-status").removeClass("show");
				showError("Link Victim hợp lệ!");
				hacking(victim);
			}, 2000);
		} else {
			setTimeout(() => {
				$(".checking-status").removeClass("show");
				showError("Link Victim không hợp lệ!");
				resetInput();
			}, 2000);
		}
	}
}
function resetInput() {
	victimInp.classList.remove("active");
	victimLink.disabled = false;
	victimLink.value = "";
	hackBtn.classList.remove("hold");
}
function showError(text) {
	errLog.innerText = text;
	errLog.classList.add("show");
	setTimeout(() => {
		errLog.classList.remove("show");
	}, 1500);
}
function startOver() {
	resetInput();
	$(".popup").removeClass("show");
	$(".hacking-log").remove(test);
	isClicked = false;
	window.clearTimeout(typeTimeout);
	window.clearTimeout(typingTimeout);
	setTimeout(() => {
		test.innerHTML = "";
	}, 1000);
}
function checkVictim(link) {
// 	let pattern =
// 		/^(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?$/;
	let pattern = /^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i;
	if (pattern.test(link)) {
		return true;
	}
	return false;
}

function hacking(link) {
	if (test.querySelector("#cursor") != undefined) {
		var cursorToRemove = document.getElementById("cursor");
		cursorToRemove.parentNode.removeChild(cursorToRemove);
	}
	$(window).blur(function () {
		if (isClicked) {
			$(".popup").addClass("show");
			hackingForm.classList.remove("hacking");
			hackingLog.classList.remove("hacking");
		}
	});
	let dataText = [
		"Link victim is valid!",
		`Connecting to victim: ${link}`,
		"Connected to victim's data",
		"Searching for password ...",
		"Password found!",
		"Decrypting password ...",
		"██████████",
		"Decrypting done!",
		"Hacking done!",
		"Click <span id='here-btn'>here</span> to see password!",
		"Thanks for using my tool :3",
	];
	hackingForm.classList.add("hacking");
	hackingLog.classList.add("hacking");
	isClicked = true;
	const cursor = document.createElement("SPAN");
	cursor.id = "cursor";
	cursor.innerHTML = "_";
	var i = 0;

	const head = '<span class="log-head" >$pmint05: </span>';
	function typeWriter() {
		var HTML = dataText[i];
		let li = document.createElement("LI");
		let span = document.createElement("SPAN");
		span.innerHTML = head;
		li.appendChild(span);
		li.appendChild(cursor);
		test.appendChild(li);
		test.scrollTop = test.scrollHeight;

		var cursorPosition = 0,
			tag = "",
			writingTag = false,
			tagOpen = false,
			typeSpeed = 50,
			tempTypeSpeed = 0;

		var type = function () {
			if (writingTag === true) {
				tag += HTML[cursorPosition];
			}
			if (i == 6) {
				typeSpeed = 1000;
			}
			if (HTML[cursorPosition] == "<") {
				tempTypeSpeed = 0;
				if (tagOpen) {
					tagOpen = false;
					writingTag = true;
				} else {
					tag = "";
					tagOpen = true;
					writingTag = true;
					tag += HTML[cursorPosition];
				}
			}
			if (!writingTag && tagOpen) {
				tag.innerHTML += HTML[cursorPosition];
			}
			if (!writingTag && !tagOpen) {
				if (HTML[cursorPosition] == " ") {
					tempTypeSpeed = 0;
				} else {
					tempTypeSpeed = Math.random() * typeSpeed + 50;
				}
				span.innerHTML += HTML[cursorPosition];
			}
			if (writingTag == true && HTML[cursorPosition] == ">") {
				tempTypeSpeed = Math.random() * typeSpeed + 50;
				writingTag = false;
				if (tagOpen) {
					var newSpan = document.createElement("span");
					span.appendChild(newSpan);
					newSpan.innerHTML = tag;
					tag = newSpan.firstChild;
				}
			}
			cursorPosition++;
			if (cursorPosition < HTML.length) {
				setTimeout(type, tempTypeSpeed);
			}
		};
		type();

		if (i < dataText.length - 1) {
			let timeToOut = dataText[i].length * typeSpeed + 2000;
			if (i == 1) {
				timeToOut = dataText[i].length * typeSpeed + 4000;
			}
			typeTimeout = window.setTimeout(() => {
				i++;
				if (i == dataText.length - 1) {
					hacked();
				}
				typeWriter();
			}, timeToOut);
		}
	}
	typeWriter();
	//Thuật toán này cùi lắm =v
	// function typeWriter() {
	// 	var j = 0;
	// 	var speed = 50;
	// 	let li = document.createElement("LI");
	// 	let span = document.createElement("SPAN");
	// 	span.innerHTML = head;
	// 	li.appendChild(span);
	// 	li.appendChild(cursor);
	// 	test.appendChild(li);
	// 	test.scrollTop = test.scrollHeight;
	// 	function typing() {
	// 		if (j < dataText[i].length && i < dataText.length) {
	// 			span.innerHTML += dataText[i].charAt(j);
	// 			j++;
	// 			typingTimeout = window.setTimeout(typing, speed);
	// 		}
	// 	}
	// 	typing();
	// 	if (i < dataText.length - 1) {
	// 		let timeToOut = dataText[i].length * speed + 2000;
	// 		typeTimeout = window.setTimeout(() => {
	// 			i++;
	// 			if (i == dataText.length - 1) {
	// 				hacked();
	// 			}
	// 			typeWriter();
	// 		}, timeToOut);
	// 	}
	// }
	// typeWriter();
}
function hacked() {
	isClicked = false;
	victimInp.classList.remove("active");
	victimLink.disabled = false;
	hackBtn.classList.remove("hold");
}
function HaoHan() {
	const jumpBtn = document.getElementById("show-pass-prank");
	$(".troll-wrapper").addClass("show");
	jumpBtn.addEventListener("mouseenter", () => {
		jumpBtn.style.position = "absolute";
		jumpBtn.style.top = randomInt(5, window.innerHeight - 100) + "px";
		jumpBtn.style.left = randomInt(5, window.innerWidth - 200) + "px";
	});
	trollVideo.play();
	trollVideo.addEventListener("timeupdate", function () {
		if (
			Math.floor(trollVideo.currentTime) ==
			Math.floor(trollVideo.duration / 2)
		) {
			$(".hao-han-wrapper").addClass("show");
		}
	});
}
function randomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}
// RIPPLE
jQuery(function ($) {
	$(document).on("mousedown", "[data-ripple]", function (e) {
		if (!isClicked) {
			var $self = $(this);

			if ($self.is(".btn-disabled")) {
				return;
			}
			if ($self.closest("[data-ripple]")) {
				e.stopPropagation();
			}

			var initPos = $self.css("position"),
				offs = $self.offset(),
				x = e.pageX - offs.left,
				y = e.pageY - offs.top,
				dia = Math.min(this.offsetHeight, this.offsetWidth, 100), // start diameter
				$ripple = $("<div/>", { class: "ripple", appendTo: $self });

			if (!initPos || initPos === "static") {
				$self.css({ position: "relative" });
			}

			$("<div/>", {
				class: "rippleWave",
				css: {
					background: $self.data("ripple"),
					width: dia,
					height: dia,
					left: x - dia / 2,
					top: y - dia / 2,
				},
				appendTo: $ripple,
				one: {
					animationend: function () {
						$ripple.remove();
					},
				},
			});
		}
	});
});
