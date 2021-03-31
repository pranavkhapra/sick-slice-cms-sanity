import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// build a custom side bar
export default function sidebar() {
  return S.list()
    .title(`Slick's Slices`)
    .items([
      // create a new sub item
      S.listItem()
        .title('Home Page')
        .icon(() => <strong>🔥</strong>)
        // create a editor for schema type storeSettings.js schema
        // and link it to the document id of one of the id of the item in schema
        .child(
          S.editor()
            .schemaType('storeSettings')
            // make a new document id so that we dont have random string of number
            .documentId('downtown')
        ),
      // add in the rest of the document items bascially all the side bas with pizzas toppings slicemasters to change something
      //   from each of it. but we dont want the settings in it so we will filter it
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
