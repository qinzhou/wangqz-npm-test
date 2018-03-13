<template>
	<div class="demo">
		<aside>

			<ul>
				<li><router-link to="/pagination">pagination</router-link></li>
				<li><router-link to="/icon">icon</router-link></li>
			</ul>
		</aside>
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>
<script>
	export default{

	}
</script>
<style >

.demo{
	display: flex;
	width: 100%;
	height: 100%;
}
aside{
	width: 200px;
}
main{
	flex : 1;
}
</style>