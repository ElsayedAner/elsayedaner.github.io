<div class="course-header">
    <img src="{{ page.header.teaser }}" alt="{{ page.title }}">
    <div class="course-header-overlay" style="background:
        linear-gradient(
            to top, 
            {{ page.card_color | default: '#000' }}CC,  /* Semi-transparent, using hexadecimal alpha */
            {{ page.card_color | default: '#000' }}00 30%  /* Transparent, using hexadecimal alpha */
        ),
        linear-gradient(
            to right,
            {{ page.card_color | default: '#000' }}CC,  /* Semi-transparent, using hexadecimal alpha */
            {{ page.card_color | default: '#000' }}00 30%  /* Transparent, using hexadecimal alpha */
        );">
    </div>
    <div class="course-info">
        <div class="course-title" style="color: {{ page.text_color }};">
            <img src="{{ page.icon }}" alt="Course Icon" style="width: 50px; height: 50px; vertical-align: middle; margin-right: 5px;">
            {{ page.title }}
        </div>
        <div class="course-rank">
            {% for i in (1..page.rank) %}
                {{ page.rank_item }}{% unless forloop.last %} {% endunless %}
            {% endfor %}
        </div>
    </div>
</div>
<br>
