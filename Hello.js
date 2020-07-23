import React,{useState} from 'react';
 import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';



export default ({ name }) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
   <div className="card-body">



             <Button variant="outline-primary"  size="1g" onClick={handleShow}>
        Launch demo modal
      </Button>

 <Modal show={show}
              onHide={handleClose}
              size="lg"
              scrollable={"true"}
              backdrop="static"
              animation={"false"}
              aria-labelledby="title-terms" >
              <Modal.Header>
                <Modal.Title className="h5">Terms of use</Modal.Title>
              </Modal.Header>
              <Modal.Body >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique, dui in volutpat sollicitudin, erat lacus molestie libero, et scelerisque erat tellus eget risus. Mauris fringilla, eros vel tincidunt accumsan, massa enim rhoncus massa, sit amet sagittis dolor purus id lorem. Praesent sed mattis neque, luctus viverra nibh. Morbi dui urna, facilisis mattis leo vitae, sollicitudin ornare elit. Sed magna augue, ornare a facilisis id, dapibus a nulla. Fusce dapibus, elit nec accumsan imperdiet, ipsum libero consectetur libero, sodales tempus risus sapien vitae purus. Maecenas vulputate nisl nulla, posuere rutrum enim porttitor eget. Morbi accumsan commodo commodo. Integer scelerisque eu massa at volutpat. Ut quis orci purus. Vestibulum imperdiet rhoncus odio, vitae posuere tortor venenatis vel. In hac habitasse platea dictumst. Cras nisi purus, dignissim ac pellentesque bibendum, maximus in justo. Cras sit amet tortor ac enim venenatis imperdiet. Duis sapien arcu, cursus ut condimentum sed, porta et metus. Nulla facilisi.</p>

                <p>Donec pretium massa nec dolor pulvinar maximus. Quisque interdum eget sapien vitae efficitur. Praesent vitae tempus nisi, id fringilla dolor. Donec at urna vehicula, bibendum leo sed, consectetur ligula. Vivamus posuere pellentesque odio, et accumsan leo porta vitae. Etiam non pharetra leo, in sollicitudin justo. Donec vestibulum nulla eget convallis bibendum. Pellentesque finibus turpis metus, eget elementum lectus ultrices nec.</p>

                <p>Vestibulum placerat ut libero at ullamcorper. Suspendisse sem quam, bibendum nec orci quis, sollicitudin ultrices mi. Proin ut dictum risus. Nulla neque turpis, ultrices nec nisi at, eleifend aliquet tortor. Phasellus nec orci nisl. Vivamus a leo suscipit turpis fringilla malesuada et sed velit. Aliquam erat volutpat. In lacus lectus, euismod euismod metus non, condimentum pretium mi. Ut elit ex, finibus imperdiet enim ac, faucibus consectetur augue. Nulla suscipit tortor dui. Phasellus quis est bibendum, fermentum ligula at, pulvinar massa. Praesent eget nisi ex. Vestibulum rutrum ex est, sit amet bibendum lacus auctor eu. Proin sit amet libero dolor. Suspendisse quis ligula orci.</p>

                <p>Integer sit amet odio quis purus posuere consectetur sed ut ex. In posuere consectetur faucibus. Curabitur convallis posuere nibh, nec elementum sem bibendum in. Proin fermentum, libero vel viverra lobortis, elit elit rutrum risus, eu pellentesque neque nunc et nulla. Donec in urna maximus, pulvinar ipsum a, suscipit ligula. Etiam luctus in nisi in dapibus. Quisque a vulputate arcu, id ornare augue. Sed vel iaculis mauris. Sed rhoncus, nisl vel consectetur fermentum, lectus lacus suscipit tortor, et posuere felis metus facilisis tellus.</p>
              </Modal.Body>
              <Modal.Footer>

                <Button variant="success" type="submit" onClick={handleClose}>
                  Ok
          </Button>
              </Modal.Footer>
            </Modal>
     
               
   </div>
)

}



