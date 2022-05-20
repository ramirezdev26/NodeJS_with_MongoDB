const messageMock = [
    {
        _id: "df02dea3-dc02-494d-bf57-fbbaaa1a4d3e",
        user: "kseilmann0",
        message: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      }, 
      {
        _id: "5114dbb0-5f4a-4f9b-b9e8-598a5edb5537",
        user: "ddrable1",
        message: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus_id turpis. Integer aliquet, massa_idlobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."
      }, 
      {
        _id: "b0d7f989-d961-4439-bc85-1d3f48239126",
        user: "ljerdein2",
        message: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      }, 
      {
        _id: "95b0ad8c-e238-4c92-a5c9-3192d16db065",
        user: "mkeeting3",
        message: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      }, 
      {
        _id: "2a3da87e-a21c-4010-9612-e0c034eb1853",
        user: "rhayth4",
        message: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
      }, 
      {
        _id: "ba0d59ec-ae28-4f89-b664-0c2d8fd48cd1",
        user: "bwoodhall5",
        message: "Nulla ut erat_idmauris vulputate elementum. Nullam varius. Nulla facilisi."
      }, 
      {
        _id: "606d6ad9-eebb-44e6-8af6-b772a9e9a16b",
        user: "rbruyntjes6",
        message: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
      }, 
      {
        _id: "2a2932ee-6978-4f57-912d-968c86775a7e",
        user: "lwebby7",
        message: "Curabitur gra_id nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
      }, 
      {
        _id: "7712d6c8-6400-4b17-8ccf-9c9b43a89d82",
        user: "cwinspur8",
        message: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus_idsapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
      }, 
      {
        _id: "14e9a794-26ff-4732-aaef-0c9258eaf7cd",
        user: "bdoby9",
        message: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
      }
];

class MessageServiceMock {
    async getMessage() {
        return Promise.resolve(messageMock);
    }

    async createMessage() {
        return Promise.resolve(messageMock[0]);
    }
}

module.exports = {
    messageMock,
    MessageServiceMock
}