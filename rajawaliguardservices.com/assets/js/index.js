$(document).ready(function () {
	$("#headerSidenavButton").click(function () {
		$("#headerBackdrop, #headerSidenav").addClass("active");
	});

	$("#headerBackdrop").click(function () {
		$("#headerBackdrop, #headerSidenav").removeClass("active");
	});

	$("#aboutVisiButton").click(function () {
		$("#aboutVisiButton").removeClass("outline");
		$("#aboutMisiButton").addClass("outline");
		$("#aboutVisi").removeClass("hidden");
		$("#aboutMisi").addClass("hidden");
	});

	$("#aboutMisiButton").click(function () {
		$("#aboutVisiButton").addClass("outline");
		$("#aboutMisiButton").removeClass("outline");
		$("#aboutVisi").addClass("hidden");
		$("#aboutMisi").removeClass("hidden");
	});
});
