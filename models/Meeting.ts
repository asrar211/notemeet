import mongoose, { Document, Schema } from "mongoose";

export interface IMeeting extends Document {
    _id: mongoose.Types.ObjectId;
    hostId: mongoose.Types.ObjectId;
    participantId?: mongoose.Types.ObjectId | null;
    status: "waiting" | "active" | "ended";
    meetingCode: string;
    createdAt: Date;
    updatedAt: Date;
}

const meetingSchema = new Schema<IMeeting>({
    hostId: {type: mongoose.Types.ObjectId, ref: "User", required: true},
    participantId: {type: mongoose.Types.ObjectId, ref: "User",},
    status: {type: String, enum: ["waiting", "active", "ended"], default: "waiting"},
    meetingCode: {type: String, required: true, unique: true, index: true}
}, {timestamps: true});

const Meeting = mongoose.models.Meeting || mongoose.model<IMeeting>("Meeting", meetingSchema);
export default Meeting;