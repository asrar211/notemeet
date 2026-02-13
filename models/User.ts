import mongoose, {Document, Schema} from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    username: string;
    password: string;
    isEmailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isEmailVerified: {type: Boolean, default: false},
}, {timestamps: true});

userSchema.pre("save", async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
});

const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);
export default User;