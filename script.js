var dash = document.querySelector('#dash')

let inf = {'contents':['news','pictures'],'cartoons':['amazin']}

for (n in inf){
	console.log(n)
	let li = document.createElement('li')
	li.innerText = n
	dash.appendChild(li)
	let ul = document.createElement('ul')
	dash.appendChild(ul)
	for (let m = 0; m < inf[n].length; m++){
		let li = document.createElement('li')
		let a = document.createElement('a')
		a.innerText = inf[n][m]
		a.setAttribute('href',`#${inf[n][m]}`)
		ul.appendChild(li)
		li.appendChild(a)
	}
	
}