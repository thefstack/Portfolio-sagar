const ReviewCard = ({ review }) => {
  return (
    <div className="w-[340px] min-h-[220px] rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex items-center gap-3">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover grayscale"
        />
        <div>
          <p className="font-medium text-white">{review.name}</p>
          <p className="text-sm text-gray-400">{review.role}</p>
        </div>
      </div>

      {/* Text */}
      <p className="text-sm text-gray-400 leading-relaxed line-clamp-4">
        “{review.text}”
      </p>

      {/* Rating */}
      <div className="flex items-center  gap-1 mt-auto">
        <span className="text-sm text-gray-400">5.0</span>
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm">★</span>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;