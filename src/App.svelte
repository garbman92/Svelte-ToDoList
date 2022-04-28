<script>
	import Todo from './Todo.svelte';
	import { todos } from './stores'
let newTodo = "";

function addTodo(){
	todos.update((current) =>{
		let updated = current;
		updated.push(newTodo);
		return updated; 
	})
}

function handleDeleteTodo(event) {
	const { index } = event.detail;

todos.update((current) => {
	let updated = current;
	updated.splice(index, 1);
	return updated;
});
}
</script>


<style>
	main {
		display:flex;
		flex-flow: column nowrap;
		align-items: center;
		text-align: center;
		margin: 0 auto;
		padding-bottom:150px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.container {
		display:flex;
		flex-flow: row wrap;
		justify-content: center;
		width:100%;
		max-width: 500px;
	}

	.new-todo-box {
		padding: 10px;
		background-color: rgb(226, 147, 11);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>List App</h1>
	
	<div class="container">
	{#each $todos as todo,index}
		<Todo {index} text={todo} on:delete={handleDeleteTodo} />
	{/each}
	</div>
	<div class="new-todo-box"> 
		<form on:submit|preventDefault={addTodo}>
		<input type='text'
		bind:value={newTodo}
		 placeholder=" add a new Todo... "  />
		<button type='submit'>Add</button>
			</form>
	</div>

</main>