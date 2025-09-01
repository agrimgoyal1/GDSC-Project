islike = false

function like() {
    if(islike === true) {
        alert("You have already liked this post")
        resp = prompt("Do you want to unlike this post? Type yes if you want to do so")
        if(resp == "yes") {
            alert("You have unliked this post")
            islike = false
        }
    } else {
        islike = true
        alert("You have liked this post")
    }
}
function comment() {
    let x = prompt("Enter your comment about the vlog")
    if(x){
        let div = document.getElementsByClassName("comments")[0]
        let p = document.createElement("p")
        p.innerText = x
        div.append(p);    
    }
}

