<script>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher(); 

    export let index;  
    export let text;

    function deleteTodo() {
         dispatch('delete', { index: index });
    }
</script>
<style>
main {
    position: relative;
    width:150px;
    background-color: rgb(226, 147, 11);
    padding: 10px;
    margin: 5px;
    box-shadow: 5px 5px 5px 0px #dbdbdbdb;

}

.btn-delete{
    background-color: rgb(226, 147, 11);
    border:none;
    position: absolute;
    right:0;
    top: 0;
}

.btn-delete:hover{
cursor: pointer;
background-color: rgb(203, 189, 31);
}
</style>


<main>
    <button class='btn-delete' on:click={deleteTodo}>X</button>
    <p>{text}</p>
</main>