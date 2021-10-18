AFRAME.registerComponent("posters", {
    init: function () {
        this.comicContainer = this.el
        this.createComic()
    },

    createComic: function () {
        const comicRef = [{
            id: "captamerica",
            url: "C157/assets/Captain America.jpg",
            title: "Captain America"
        }, {
            id: "hulk",
            url: "C157/assets/Hulk.jpg",
            title: "Hulk"
        }, {
            id: "spiderman",
            url: "C157/assets/Spiderman.jpg",
            title: "Spider-man"
        }, {
            id: "wintersoldier",
            url: "C157/assets/Winter Soldier.jpg",
            title: "Winter Soldier"
        }]

        let xPosition = -74
        for (var comicBook of comicRef) {
            console.log(comicRef)
            console.log(comicBook)
            const posX = xPosition + 30
            const posY = 5
            const posZ = -40
            const position = { x: posX, y: posY, z: posZ }

            console.log(comicBook.id)

            const comicEl = this.comic(comicBook)
            const borderEl = this.createBorder(comicBook.id, position)

            borderEl.appendChild(comicEl)
            this.comicContainer.appendChild(borderEl)

            xPosition = posX
        }
    },

    createBorder: function (id, position) {
        var element = document.createElement("a-entity")

        element.setAttribute("id", id)
        element.setAttribute("visible", true)
        element.setAttribute("geometry", {
            primitive: "plane",
            width: 22,
            height: 30
        })

        element.setAttribute("position", position)
        element.setAttribute("material", {
            color: "black",
            opacity: 1
        })

        element.setAttribute("cursor-listener", {})
        return element
    },

    comic: function (item) {
        const element = document.createElement("a-entity")
        element.setAttribute("visible", true)
        element.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        })

        element.setAttribute("position", { x: 0, y: 0, z: 0.1 })

        element.setAttribute("material", {
            src: item.url
        })

        return element
    }
})