<template>
    <div>
        <b-col>
            <b-card 
                :title="nome"
                style="max-width:20rem"
                class="mb-5"
                border-variant="primary"
                header="Primary"
                header-bg-variant="primary"
                header-text-variant="white"
                align="center"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article">
            <b-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </b-card-text>
                <b-button variant="primary">Comprar</b-button>
            </b-card>
      </b-col>
    </div>
</template>

<script>
export default {
    props: {
        nome: {
            type: String,
            required: true,
        }
    }
};
</script>