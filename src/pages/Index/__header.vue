<template>
	<section>
		<div class="hero-grid">

				<div class="left-grid-content">
					<h1>Your Trusted Partner For UI/UX Design & Software Development</h1>
					<p>We help african businesses build & launch their web, mobile application & software projects faster and cheaper</p>
					<div class="btn">Get a free Quote ></div>
				</div>

				<div class="right-grid-content">
					<div>
						<img src="@/assets/images/hero-img.png" alt="hero image">
					</div>
				</div>

		</div>
	</section>

</template>

<style>
/* The Hero Grid */
.hero-grid {
	width: 100%;
	height: auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-areas: 
	"left-grid right-grid";
}

@media (max-width: 768px) {
	.hero-grid {
		grid-template-areas:  
		"right-grid"
		"left-grid";
	}
}

img {
	width: 100%;
	height: auto;
}

/* Left Grid Content */
.left-grid-content {
	width: 100%;
	height: auto;
	grid-area: left-grid;
}

.left-grid-content h1{
	margin: 70px 0 17px 0;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: bold;
	font-size: 50px;
	line-height: 67px;
	color: #000000;
}

.left-grid-content p {
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 23px;
	line-height: 36px;
	color: #000000;
	margin-bottom: 39px;
}

.left-grid-content div {
	width: 195px;
	height: 64px;
	background: #E75E33;
	border-radius: 5px;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 24px;
	color: #FFFFFF;
	display: grid;
	place-items: center;
	cursor: pointer;
	margin-bottom: 69px;
}

/* Right Grid Content */
.right-grid-content {
	width: 100%;
	height: auto;
	grid-area: right-grid;
	display: grid;
	place-items: center;
}

.right-grid-content div {
	width: 286px;
	height: 289px;
	border-radius: 5px;
}



</style>