from dashboard.models import Program, Department

def data(request):
    return {
        'programs_menu': Program.active_objects.all(),
        'departments_menu': Department.active_objects.all()
    }