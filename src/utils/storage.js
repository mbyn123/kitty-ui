export function active(){
	return sessionStorage.getItem('active') || 1
}

export function menuItemActive(){
    return sessionStorage.getItem('menuItemActive') || '/tally'
}