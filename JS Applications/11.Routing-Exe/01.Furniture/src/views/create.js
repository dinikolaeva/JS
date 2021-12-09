import { html } from '../../node_modules/lit-html/lit-html.js';
import { createRecord } from '../api/data.js';

const createTemplate = (onSubmit) => html `
<div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control valid" id="new-make" type="text" name="make">
                    </div>
                    <div class="form-group has-success">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control" id="new-model" type="text" name="model">
                    </div>
                    <div class="form-group has-danger">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control" id="new-year" type="number" name="year">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control" id="new-description" type="text" name="description">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control" id="new-price" type="number" name="price">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control" id="new-image" type="text" name="img">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`;

export async function createPage(context) {

    context.render(createTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const make = formData.get('make');
        const model = formData.get('model');
        const year = Number(formData.get('year'));
        const description = formData.get('description');
        const price = Number(formData.get('price'));
        const img = formData.get('img');
        const material = formData.get('material');

        const isValid = validation(make, model, year, description, price, img);
        console.log(isValid);

        if (isValid.includes(true)) {
            return alert('Please fill all mandatory fields!');
        }

        const editItem = {
            make,
            model,
            year,
            description,
            price,
            img,
            material
        }

        await createRecord(editItem);

        context.page.redirect('/');
    }
}

function validation(make, model, year, description, price, img) {
    let invaidPrice = false;
    let invaidModel = false;
    let invaidMake = false;
    let invaidYear = false;
    let invaidDescriprion = false;
    let invaidImg = false;

    if (price <= 0) {
        invaidPrice = true;
    }
    if (!validateFile(img)) {
        invaidImg = true;
    }
    if (description.length <= 10) {
        invaidDescriprion = true;
    }
    if (year < 1950 || year > 2500) {
        invaidYear = true;
    }
    if (model.length < 4) {
        invaidModel = true;
    }
    if (make.length < 4) {
        invaidMake = true;
    }

    return [invaidPrice, invaidModel, invaidMake, invaidYear, invaidDescriprion, invaidImg];
}

function validateFile(img) {
    var allowedExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var fileExtension = img.split('.').pop().toLowerCase();
    var isValidFile = false;

    for (var index in allowedExtension) {

        if (fileExtension === allowedExtension[index]) {
            isValidFile = true;
            break;
        }
    }

    if (!isValidFile) {
        alert('Allowed Extensions are : *.' + allowedExtension.join(', *.'));
    }

    return isValidFile;
}