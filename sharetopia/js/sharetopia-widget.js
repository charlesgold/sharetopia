//-------------------------------------------------------------
//Description: sharetopia widget v1.0(b) 
//Author: charlie topjian (www.charlietopjian.com/sharetopia)
//Copyright 2011 Charlie Topjian(c)
//This Script/Program/Software is distributed under the terms of the GNU General Public License.
//
//License information:
/*	This program ("sharetopia") is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see http://www.gnu.org/licenses/gpl.txt.
*/
//-------------------------------------------------------------		

$(document).ready(function(){


	//-------------------------------------------------------------	
	//Function: Jquery function on selector
	//Description: interates through all elements with class name
	//'sharetopia_fb' and applies the code below in an effor to create
	//a facebook share button that uses the sharetopia concept. Which
	//allows the user to share exactly what he/she needs. creates a proxy.
	//-------------------------------------------------------------	
	$(".sharetopia_fb").each(function(index){

		//Sharetopia configurations			
		var fbShare = 'http://www.facebook.com/sharer.php?u='
		var shareUrl = 'http://truoffers.com/go/share.php?';
		var shareParam = '';

		//Attribute info from the sharetopia_fb class
		var title = $(this).attr("share_title");
		var desc = $(this).attr("share_desc");
		var url = $(this).attr("share_url");
		var img = $(this).attr("share_img");	

		//build sharetopia link	
		shareParam = shareParam + 't=' + title;
		shareParam = shareParam + '&d=' + desc;
		shareParam = shareParam + '&u=' + url;
		shareParam = shareParam + '&i=' + img;				
		
		shareUrl = encodeURIComponent(shareUrl + shareParam);
		
		//Set the sharetopia for this class
		$(this).attr('href',fbShare + shareUrl);		
		
		$(this).attr('target','_blank');
		
	});	

	
});//end of document.ready