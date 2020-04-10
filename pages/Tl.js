import React from 'react'
import Title from '../components/journey/timeline/Title';
import LeftImage from '../components/journey/timeline/LeftImage';
import NoImage from '../components/journey/timeline/NoImage';
import TopImage from '../components/journey/timeline/TopImage';
export default function Tl({year}) {
    return (
        <div>
            
<Title
title="Start of a journey"
year={year}
/>

<LeftImage
title="Abdul Latif Jameel establish"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
link="#"
linktitle="ALJ News"
image="https://dummyimage.com/200x200/bababa/737373"
flag="static/images/flags/ind.png"
/>

<NoImage
title="Abdul Latif Jameel establish"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
link="#"
linktitle="ALJ News"
flag="static/images/flags/ind.png"
/>


<TopImage
title="Abdul Latif Jameel establish"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
link="#"
linktitle="ALJ News"
image="https://dummyimage.com/600x200/bababa/737373"
flag="static/images/flags/ind.png"
/>

<NoImage
title="Abdul Latif Jameel establish"
description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo."
link="#"
linktitle="ALJ News"
flag="static/images/flags/ind.png"
/>
      
        </div>
    )
}
