AFRAME.registerComponent("cursor-listener", {
    schema: {
        selectedItemId: { type: "string", default: "" }
    },
    init: function () {
        this.handleMouseEnterEvent()
        this.handleMouseLeaveEvent()
    },

    handleComicListState: function () {
        const id = this.el.getAttribute("id")
        const comicId = ["captamerica", "hulk", "spiderman", "wintersoldier",]

        if (comicId.includes(id)) {
            const comicContainer = document.querySelector("#comic-container")
            comicContainer.setAttribute("cursor-listener", {
                selectedItemId: id
            })

            this.el.setAttribute("material", { color: "#1565c0" })
        }
    },

    handleMouseEnterEvent: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handleComicListState()
        })
    },

    handleMouseLeaveEvent: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data

            if (selectedItemId) {
                const el = document.querySelector(`#${selectedItemId}`)
                const id = el.getAttribute("id")

                if (id === selectedItemId) {
                    el.setAttribute("material", { color: "black", opacity: 1 })
                }
            }
        })
    }
})