import './index.css'

import { profile, highline, cards, message, request } from './data/db.json'

// import { profile, highline, message, request, cards } from '@/js/database'


import { 
 nav_container_logo,
 nav_container_create_img,
 left_profile_img,
 left_profile_name, 
 left_profile_at,
 middle_highline_description,
 middle_highline_description_img,
 middle_highline_description_p,
 middle_form_img,
 middle_form_input_text,
 create_news,
 create_profile_structure,
 create_picture_structure,
 create_control_structure,
 create_comment_structure,
 create_friend_list,
 create_request_list
} from '@/js/common' 

// Nav
nav_container_logo.textContent ='TopSocial'
nav_container_create_img.src = profile.img_src

// Left 
left_profile_img.src = profile.img_src
left_profile_name.textContent = profile.name
left_profile_at.textContent = profile.at 

// Middle

// Form
middle_form_img.src = profile.img_src
middle_form_input_text.placeholder = `What is on your mind, ${profile.name} ?`

// Highline
middle_highline_description_p.forEach((element, index) => {
  element.textContent = highline.description[index]
})
middle_highline_description_img.forEach((element, index) => {
  element.src = `/images/profile/profile_${index + 2}.png`
})
middle_highline_description.forEach((element, index) => {
  element.style.backgroundImage = `url("/images/highline/highline_${index + 1}.jpeg")`
})

// Card
const cardDom = document.querySelector('.card')

cards.forEach(element => {
  const doms = create_news()
  cardDom.appendChild(doms.info)

  create_profile_structure(doms.info_profile, element.profile)

  create_picture_structure(doms.info_picture, element.picture)

  create_control_structure(doms.info_control)

  create_comment_structure(doms.info_comment, element.comment)
})

//message
const messageDom = document.querySelector('.friend-list')
create_friend_list(messageDom, message)

//request
const requestDom = document.querySelector('.request-list')
create_request_list(requestDom, request)
