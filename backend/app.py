# Main Flask file
from flask import request, jsonify
from config import app, db
from models import Cat

@app.route("/") # python decorator function
@app.route("/home") 
def home():
    return "Hello World!"

@app.route("/cats", methods=["GET"])
def cats():
    page = request.args.get('page', 1, type=int)  
    per_page = request.args.get('per_page', 12, type=int)
    cats = Cat.query.paginate(page=page, per_page=per_page)

    return jsonify({
        "cats": [cat.to_json() for cat in cats.items],  
        "total": cats.total,  
        "pages": cats.pages,  
        "current_page": cats.page,  
    }), 200

@app.route("/cat/create", methods=["POST"])
def add_cat():
    # print("first data: ", request.data)
    # binary string döner
    data = request.get_json()
    cat = Cat(
        title=data["title"],
        description=data["description"],
        img_url=data["imgUrl"],
        city=data["city"],
        email=data["email"],
    )
    db.session.add(cat)
    db.session.commit()
    return jsonify(cat.to_json()), 201

@app.route("/cat/<int:cat_id>", methods=["GET"]) # @app.get
def cat(cat_id):
    cat = Cat.query.filter(Cat.id == cat_id).first()
    if cat:
        return jsonify(cat.to_json()), 200
    else:
        return jsonify({"error": "Cat not found"}), 404

@app.route("/cats/delete/<int:cat_id>", methods=["DELETE"])
def cat_delete(cat_id):
    cat = db.get_or_404(Cat, cat_id)
    # print(cat)
    db.session.delete(cat)
    db.session.commit()
    return jsonify({"message": "Cat deleted successfully!"}), 200


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)