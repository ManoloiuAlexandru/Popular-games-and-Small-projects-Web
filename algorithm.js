var arr;
var arr_bubble;
var arr_insert;
function min_poz(arr_elem,pozmin)
{
	var pozmins=pozmin;
	var min=arr_elem[pozmin];
	for (i=pozmin;i<arr_elem.length;i++)
	{
		if (min>arr_elem[i])
		{
			min=arr_elem[i];
			pozmins=i;
		}
	}
	return pozmins;
}
var poz_to_start=0;
var poz_to_switch=0;
function select_sort(arr)
{
	while(poz_to_start<arr.length)
	{
		poz_to_switch=min_poz(arr,poz_to_start);
		var aux;
		aux=arr[poz_to_switch];
		arr[poz_to_switch]=arr[poz_to_start];
		arr[poz_to_start]=aux;
		poz_to_start++;
		console.log(arr);
	}
}
function bubble_sort(arr_bubble)
{
	var ok=0;
	while(ok==0)
	{
		ok=1;
		for (i=0;i<arr_bubble.length-1;i++)
		{
			if (arr_bubble[i]>arr_bubble[i+1])
			{
				var aux=arr_bubble[i];
				arr_bubble[i]=arr_bubble[i+1];
				arr_bubble[i+1]=aux;
				ok=0;
			}
		}
	}
}
function insertions_sort(arr_insert)
{
	var current_poz;
	for (var i=0;i<arr_insert.length;i++)
	{
		var j;
		current_poz=i;
		for (j=i-1;j>=0;j--)
		{
			if (arr_insert[i]<arr_insert[j])
			{
				current_poz=j;
			}
		}
		var aux=arr_insert[i];
		for (j=i;j>current_poz;j--)
		{
			arr_insert[j]=arr_insert[j-1];
		}
		arr_insert[j]=aux;
	}
}
function search_for_elem(arr,elem)
{
	if (elem==arr[Math.floor(arr.length/2)])
	{
		document.getElementById("result_search").innerHTML="It is in the array";
		return 
	}
	else if (elem>=arr[Math.floor(arr.length/2)])
	{
		arr=arr.slice(Math.floor(arr.length/2)+1,arr.length);
		search_for_elem(arr,elem);
	}
	else if (elem<arr[Math.floor(arr.length/2)])
	{
		arr=arr.slice(0,Math.floor(arr.length/2));
		search_for_elem(arr,elem);
	}
	else
	{
		document.getElementById("result_search").innerHTML="It is not in the array";
		return
	}
}
