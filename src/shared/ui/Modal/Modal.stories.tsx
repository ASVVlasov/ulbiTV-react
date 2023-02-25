import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Modal',
    component: Modal,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Primary: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab adipisci aut
                                    blanditiis consectetur corporis dicta dignissimos dolorem facere fugit, itaque
                                    libero maiores nulla obcaecati odio odit optio perspiciatis provident quaerat
                                    similique tenetur veniam voluptates voluptatibus? Amet beatae molestias perferendis
                                    quaerat quo! Atque cupiditate doloribus ea harum obcaecati tenetur voluptatem.
                                    Accusantium ad at dolores esse, ex iusto, magnam nemo, nostrum perspiciatis quam qui
                                    quo quos repellat sequi vitae voluptate voluptatem. Cumque, doloribus praesentium.
                                    Beatae corporis dicta dolore earum eveniet harum id illo impedit iure labore minima,
                                    modi, molestiae nisi nostrum nulla optio porro provident quaerat quas, qui quis
                                    repellat vel! Ab aut enim et, explicabo facere molestiae neque numquam perferendis,
                                    repellat sapiente sunt unde, voluptas. Aspernatur at atque cumque delectus dicta
                                    dolore eum exercitationem, hic iure iusto labore libero maiores natus, nihil nulla
                                    odio quidem quis repellendus reprehenderit soluta tempore tenetur ullam unde vel
                                    velit voluptates, voluptatibus? Atque consequuntur, exercitationem libero molestias
                                    mollitia porro rem soluta. A accusantium ad alias architecto assumenda consequuntur
                                    cum dicta doloribus ducimus ea, earum eligendi facere fugiat illum incidunt ipsam
                                    itaque maiores minima minus neque nostrum odio perspiciatis possimus quaerat quam
                                    quo quos reiciendis rem saepe sequi ut veritatis vero vitae! A cumque, sapiente!
                                    Accusamus aliquid architecto aspernatur cum debitis deleniti deserunt doloribus
                                    error, est expedita fugiat labore minus molestias nesciunt odit optio provident quas
                                    repellendus sequi totam unde voluptas, voluptatibus. Alias amet animi aperiam autem
                                    beatae consequatur corporis cupiditate dolor dolorum ducimus eaque earum eligendi
                                    error eum explicabo fugit harum, illum ipsa laudantium molestiae molestias nam
                                    nesciunt nisi nobis officia placeat praesentium quas ratione recusandae reiciendis,
                                    repellat reprehenderit sequi sint soluta, unde vero voluptate! Commodi eius in
                                    praesentium quas quasi reprehenderit velit. Ad aperiam atque culpa dolores dolorum
                                    ducimus eaque eligendi excepturi expedita ipsam laudantium libero magni molestias
                                    neque nostrum officiis optio perspiciatis provident quae quis quod quos rem repellat
                                    soluta suscipit voluptates, voluptatibus. Aperiam eligendi eveniet harum id non
                                    porro, praesentium quas repudiandae sint unde! Ad aliquam at blanditiis culpa
                                    dignissimos explicabo, fuga ipsum, iusto laboriosam minus, nostrum odio quam quas
                                    rem sint sunt ut voluptatem? Asperiores autem consectetur culpa delectus doloremque
                                    doloribus ex fugit ipsa laborum maiores maxime nemo, nesciunt obcaecati, officia
                                    perferendis, quaerat quibusdam recusandae rerum tempore voluptas. Doloremque minus
                                    provident sint soluta tempore, voluptas. Blanditiis culpa, cum delectus ducimus
                                    facere maxime nemo? Id ipsa mollitia, nam nisi nobis obcaecati optio provident
                                    voluptates! Architecto ducimus earum expedita inventore iste iusto maxime molestiae,
                                    odio quisquam voluptatibus. Autem earum facere illum maiores neque quidem quos
                                    repellat sapiente sit voluptatem. A amet animi cumque esse est excepturi, explicabo,
                                    maiores necessitatibus nemo nisi non officia perferendis quisquam ratione recusandae
                                    reprehenderit saepe sed sit voluptates voluptatibus. Aperiam architecto debitis
                                    eaque labore omnis porro, quo voluptas. Accusamus, consectetur cupiditate, deserunt
                                    ex iure minus, nostrum obcaecati omnis quaerat reiciendis similique ut veritatis
                                    vitae. Amet aut beatae corporis distinctio doloremque dolores et eveniet fuga labore
                                    laboriosam modi mollitia nam neque nesciunt, odit pariatur perferendis placeat
                                    provident quas quasi quia quis ratione, totam vitae voluptates. Error fugiat
                                    pariatur qui sunt.`,
};
