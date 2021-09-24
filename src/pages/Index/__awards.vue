<template>
	<section>
	<div class="awards">
		<div class="text">
			<h1>Rewards & Recognitions</h1>
			<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient vulputate non hendrerit porttitor felis molestie non consectetur convallis. Duis lorem fames ullamcorper aliquet pulvinar convallis </h3>
			<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient vulputate non hendrerit porttitor felis molestie non consectetur convallis.</h6>
		</div>
		<div class="media">
		<div class="images">
			<img src="@/assets/images/awards/award4.png" alt="Notable award">
			<img src="@/assets/images/awards/award3.png" alt="Notable award">
			<img src="@/assets/images/awards/award2.png" alt="Notable award">
			<img src="@/assets/images/awards/award1.png" alt="Notable award">
		</div>
		</div>
	</div>
	</section>
</template>

<style scoped>
	p,h1,h2,h3,h4,h5,h6{
		margin: 0;
		padding: 0;
	}
	.awards{
		display: grid;
		grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
		gap: 30px;
		place-items: center;
		width: 100%;
	}
	.awards .text{
		width: 100%;
	}
	.awards .text h1{
		font-weight: 600;
		font-size: 55px;
		line-height: 73px;
		margin-bottom: 32px;
	}
	.awards .text h3{
		font-size: 23px;
		line-height: 36px;
		margin-bottom: 74px;
	}
	.awards .text h6{
		font-size: 23px;
		line-height: 36px;
	}
	.awards .media{
		width: 100%;
		height: auto;
		display: grid;
		place-items: center;
	}
	.awards .images{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 380px;
		column-gap: 56px;
		row-gap: 60px;
	}
	@media (max-width:768px) {
		.awards .images{
			width: 90%;
		}
	}
	.awards .images img{
		width: 162px;
		height: 163px;
		border-radius: 5px;
		background: #FADCCF;
		object-fit: cover;
	}
</style>