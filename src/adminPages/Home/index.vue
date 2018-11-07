<template>
    <div class="panel">
        <panel-title :title="$router.meta.title"></panel-title>
        <div class="panel-body">
            {{msg}}
        </div>
    </div>
</template>

<script type="text/javascript">
    import panelTitle from '/components/panelTitle'

    export default {
        data() {
            return {
                msg: 'home page'
            }
        },
        components: {
            panelTitle
        }
    }
</script>
