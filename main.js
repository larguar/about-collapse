// —————————— Team Info ————————— *
const team = [
  {
    'name': 'Lauren',
    'title': 'Founder & Doer of All the Things',
    'photo': 'https://via.placeholder.com/500x625/9B9328/FFFFFF?text=Headshot',
    'bio': '<p>Ut in sapien a quam finibus dictum non eget felis. Duis et tincidunt augue. Proin vulputate risus urna, ut vestibulum risus maximus quis. Pellentesque lacinia, leo a luctus varius, urna mauris maximus metus, ut tincidunt justo quam eget sem. Fusce in mollis mauris. In id egestas magna. Nam a tincidunt lectus.</p><p>Suspendisse congue nisi dolor, sed sollicitudin velit scelerisque ut. Suspendisse ac est sit amet diam feugiat varius et dignissim nisi. In hac habitasse platea dictumst. Suspendisse in odio mollis, blandit odio non, volutpat leo. In hac habitasse platea dictumst.</p>'
  },
  {
    'name': 'Dana',
    'title': 'Studio Assistant',
    'photo': 'https://via.placeholder.com/500x625/F9B6A6/FFFFFF?text=Headshot',
    'bio': '<p>Aliquam quis auctor ipsum, sit amet porttitor sem. Mauris sapien arcu, tristique vitae tortor non, viverra porttitor libero. Praesent convallis molestie magna, porttitor tincidunt augue ullamcorper eget. Curabitur vitae laoreet neque, elementum facilisis ex. Duis ac odio sed eros auctor posuere.</p><p>Aliquam rhoncus pulvinar erat, id euismod nisl ornare non. Nulla dapibus justo eget nulla consequat, dictum bibendum eros porttitor. In sem magna, placerat id pellentesque rhoncus, ullamcorper facilisis lectus. Quisque nec nulla orci. Morbi eu convallis enim. Vestibulum eget lacinia ipsum. Aenean at gravida arcu, et molestie felis.</p>'
  },
  {
    'name': 'Griffin',
    'title': 'Label Slapper',
    'photo': 'https://via.placeholder.com/500x625/8FC4BA/FFFFFF?text=Headshot',
    'bio': '<p>Nullam imperdiet nec, placerat sit amet metus. Nunc in mollis mi. Vestibulum eget lorem vel tellus porta pulvinar. Nunc vel facilisis massa, nec vehicula lectus. Sed efficitur turpis est, at commodo tellus maximus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend suscipit orci, id blandit mauris dapibus at.</p><p>Morbi rhoncus sem leo, ullamcorper ornare nibh blandit vel. Ut risus nisi, cursus consequat dolor id, vulputate ultricies dui. Proin pellentesque neque magna, a viverra mauris vehicula id. In nec felis ut ligula congue imperdiet rutrum sit amet elit.</p>'
  }
];
// —————————— Asterisk Animation —————————— *
$('.person').hover(function() {
  if($(window).width() > 767) {
    $('.person img').addClass('fade');
    $(this).find('img').removeClass('fade');
  }
  $(this).find('.asterisk').addClass('active fa-light fa-asterisk');
}, function() {
  if($(window).width() > 767) {
    $('.person img').removeClass('fade');
  }
  $(this).find('.asterisk').removeClass('active fa-light fa-asterisk');
});
// —————————— Async Timeout Function —————————— *  
const asyncTimeout = (cb, timeout = 0) => new Promise(resolve => {
  setTimeout(() => {
    cb();
    resolve();
  }, timeout);
});
// —————————— About Section Close —————————— *    
const closeAbout = () => {
  $('html, body').animate({
    scrollTop: $('#meet-the-team').offset().top
  }, 0);
  const toDo = async () => {
	await asyncTimeout(() => {
      $('.about').attr('id', '');
	  $('.about .col-1').animate({ opacity: 0 }, 150).animate({ top: '-100px' }, 200);
      $('.about .col-2').animate({ opacity: 0 }, 300).animate({ top: '-100px' }, 400);
	  $('.close').animate({ opacity: 0 }, 200);
	  $('.about .side-text').animate({ opacity: 0 }, 200);
    }, 0);
    await asyncTimeout(() => {
      $('.about').addClass('shrink').css('padding-top', 0);
    }, 100);
    await asyncTimeout(() => {
      $('.about').hide();
    }, 400);
  };
  toDo();
}
// —————————— About Section Open —————————— *    
$('.person').click(function() {	 
  let aboutId = $('.about').attr('id');
  const thumbnailId = this.id.charAt(0);	
  if (aboutId) {
	aboutId = aboutId.charAt(0);
  }
  const idLink = '#' + thumbnailId + '-about';
  if (aboutId !== thumbnailId) {
    $('.about').show().removeClass('shrink').attr('id', thumbnailId + '-about');
	if($(window).width() <= 767) {
        $('.about').attr('style', 'padding-top: 80px; display: block');
    } else {
        $('.about').attr('style', 'padding-top: 100px; display: flex');
    }
	$('.about').show().removeClass('shrink').attr('id', thumbnailId + '-about');
    $('.about .col-1').animate({ opacity: 1, top: 0 }, 200);
    $('.about .col-2').animate({ opacity: 1, top: 0 }, 400);
    $('.close').animate({ opacity: 0.5 }, 400);
    $('.about .side-text').animate({ opacity: 1 }, 200);
	$('.about .photo').attr('src', team[thumbnailId].photo);
	$('.about .name').text(team[thumbnailId].name);
	$('.about .title').text(team[thumbnailId].title);
	$('.about .bio').html(team[thumbnailId].bio);
	$('html, body').animate({
        scrollTop: $(idLink).offset().top
    }, 0);
  } else {
	closeAbout();
  }	
});
$('.close').click(closeAbout);
