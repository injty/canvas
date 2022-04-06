window.addEventListener('load', function () {
	const canvases = document.querySelectorAll('canvas')
// all canvases
	canvases.forEach(canvas => {
		const c = canvas.getContext('2d')
		// square
		class Square {
			constructor ({position, velocity }) {
				this.position = position
				this.velocity = velocity
				this.height = 20
			}
			draw() {
				c.fillStyle = '#34ab98'
				c.fillRect(this.position.x, this.position.y, 20, this.height)
			}
			update() {
				this.draw()
				this.position.y += this.velocity.y
				if (this.position.y + this.height + this.velocity.y >= canvas.height) {
					this.velocity.y = 0
				}
			}
		}

		canvas.width = 120
		canvas.height = 70
		c.fillRect(0, 0, canvas.width, canvas.height)

		const first = new Square({
			position: {
				x: 10,
				y: 0
			},
			velocity: {
				x: 0,
				y: 0.5
			}
		})

		function animate() {
			window.requestAnimationFrame(animate)
			c.fillStyle = 'black'
			c.fillRect(0, 0, canvas.width, canvas.height)
			first.update()
		}

		animate()

	})

})